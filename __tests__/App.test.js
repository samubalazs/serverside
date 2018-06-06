import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";

import App from '../src/shared/App';
import store from "../src/shared/actions/store";

describe('Checking the list of the Movies', () => {

  it('should render the component correctly', () => {
    const rendered = renderer.create(
      <Provider store={store}>
      	<App />
      </Provider>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
})
