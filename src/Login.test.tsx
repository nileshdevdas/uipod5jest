import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import App from "./App";
import 'axios';
import React from "react";


describe('Test Login Screen', () => {
    beforeEach(() => {
        global.fetch = require('jest-fetch-mock');
    });

    test('should container username textbox', async () => {
        let app = render(<App/>);
        console.log(fetch.mockResponse(JSON.stringify({"id": 1})));
        await fetch("https://www.google.com").then((result)=>{
            console.log(result.body.toString());
        });
        let usernameElement = await screen.findByTestId('username');
        expect(usernameElement).toBeInTheDocument();
    });

    test('should container password text', async () => {
        let app = render(<App/>);
        let passwordElement = await waitFor(() => screen.findByTestId('password'));
        expect(passwordElement).toBeInTheDocument();
    });

    test('Should Throw Error Message when Submit is clicked without username and password ', async () => {
        let app = render(<App/>);
        let submitButton = await app.findByTestId("login-submit");
        fireEvent.click(submitButton);
        expect(app.queryByText('username error1')).toBeTruthy();
    });
});
