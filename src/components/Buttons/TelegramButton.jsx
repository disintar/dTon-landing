
import { LoginButton } from '@telegram-auth/react';
import axios from 'axios';

const endpoint = "https://dton.io/graphql/";

export function objectToAuthDataMap(data) {
	return new Map(Object.entries(data));
}

const makeQuery = (data) =>{
    return `
  {
   mutation {
  profile_login(telegram_data: ${objectToAuthDataMap(data)}){
    success
  }
}
  }
`;}

export const TelegramButton = () => {



    return  <LoginButton
    botUsername="dtonbot"
    onAuthCallback={(data) => {
        console.log(data);
        console.log('query', makeQuery(data))
    }}
    widgetVersion={22}
    buttonSize="large"
    cornerRadius={5}
    showAvatar={true}
    lang="en"
/>
}