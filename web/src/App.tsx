import React from 'react';
import axios from "axios";
import {observable} from "mobx";
import logo from './logo.svg';
import './App.css';
import {observer} from "mobx-react";

const API_URL = `http://localhost:3333/api/`

@observer
export default class App extends React.Component<{}> {

    @observable processingName: string | null = null;
    @observable message: string | null = "ここにAPIの結果が表示されます";

    constructor(props: any) {
        super(props);
        this.testApi = this.testApi.bind(this);
        this.testErrorApi = this.testErrorApi.bind(this);
    }

    async testApi() {
        try {
            this.message = "requesting..."
            this.processingName = 'test'
            const res = await axios.post(`${API_URL}test`)
            this.message = `Test API success. ${JSON.stringify(res.data.message)}`;
        } catch (res) {
            this.message = `Test API Failed. ${JSON.stringify(res.toJSON().message)}`;
        } finally {
            this.processingName = null
        }
    }

    async testErrorApi() {
        try {
            this.message = "requesting..."
            this.processingName = 'testError'
            const res = await axios.post(`${API_URL}test/error/400`)
            this.message = `Test API success. ${JSON.stringify(res.data.message)}`;
        } catch (res) {
            this.message = `Test API Failed. ${JSON.stringify(res.toJSON().message)}`;
        } finally {
            this.processingName = null
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>

                    <div className="btn-area">
                        <button className="btn"
                                disabled={this.processingName != null}
                                onClick={this.testApi}>
                            API TEST
                        </button>
                        <button className="btn"
                                disabled={this.processingName != null}
                                onClick={this.testErrorApi}>
                            API TEST ERROR
                        </button>
                    </div>
                    <p className="message">
                        {this.message}
                    </p>
                </header>
            </div>
        );
    }
}
