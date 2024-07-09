
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
        axios.request(options)
            .then(function (response) {
                if(response.status === 200){
                    const {data, errors} = response;
                    console.log(data)
                    console.log(errors)
                }
            })
            .catch(function (error) {
                setError('Unknown Error')
            });
    };
   
    return  <Flex vertical><LoginButton
    botUsername="dtonbot"
    onAuthCallback={(data) => {
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