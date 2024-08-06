
import { LoginButton } from '@telegram-auth/react';
import { Flex, Typography } from 'antd';
import axios from 'axios';
import { useState } from 'react';

const endpoint = "https://dton.io/graphql/";

const makeQuery = (data) => {
const {hash, auth_date, ...userdata  } = data
const userString = JSON.stringify(userdata).replaceAll('"', "'")
    return `mutation {
  profile_login(telegram_data:"user=${userString}&auth_date=${auth_date}&hash=${hash}",
    is_webapp: false){
    success
  }
    }
  `;}

export const TelegramButton = () => {
    const [error, setError] = useState('')

    const getValidate = async (validateData) => {
        const options = {
            method: 'POST',
            url: endpoint,
            data: {
                query: makeQuery(validateData)
            }
        };
        console.log('query gql',makeQuery(validateData))
        axios.request(options)
            .then(function (response) { 
             console.log('response gql', response)
            })
            .catch(function (error) {
              console.log('error gql', JSON.stringify(error, null, 4))
                setError('Unknown Error')
            });
    };
   
    return  <Flex vertical>
      <LoginButton
    botUsername="dtonbot"
    onAuthCallback={(data) => {
        console.log('widget callback', {data})
        setError('')
        getValidate(data)
    }}
    widgetVersion={22}
    buttonSize="large"
    cornerRadius={10}
    showAvatar={false}
    lang="en"
/>
{<Typography.Text style={{color: 'red'}}>{error}</Typography.Text>}
</Flex>
}