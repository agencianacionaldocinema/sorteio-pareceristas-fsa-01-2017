import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
// import ShallowRenderer from 'react-test-renderer/shallow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// it('deve apresentar participantes', () => {
//   const renderer = new MountRenderer();
//   const wrapper = renderer.mount(<App />);
//   // console.log(new App())
//   // const wrapper = mount(<App />);
//   wrapper.alternaExibicaoParticipantes()
//   //wrapper.instance().alternaExibicaoParticipantes();
//   // console.log(renderer.getRenderOutput())

// });
