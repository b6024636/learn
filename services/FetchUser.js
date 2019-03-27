import React from 'react';
import { Button } from 'react-native';

import { hiscores, constants } from 'osrs-api';

export const getUserInfo = (name) => {
    let username = name.trim().split(' ').join('_');
    return hiscores.getPlayer({name: username, type: constants.playerTypes.normal})
        .catch(console.error);
    
}