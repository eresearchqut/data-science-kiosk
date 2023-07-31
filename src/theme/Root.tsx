import React, {FC, PropsWithChildren} from "react";

import {ChakraProvider} from '@chakra-ui/react';


const Root: FC<PropsWithChildren> = ({children}) => {
    return (<ChakraProvider>{children}</ChakraProvider>);
}


export default Root;