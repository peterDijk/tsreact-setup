import * as React from 'react'
import * as enzyme from 'enzyme'
import Hello from '../components/Hello'

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' />)
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
})

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={1}/>);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={5} />);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!!!!!');
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={-1} />);
  }).toThrow();
});

it('adds a ! to the text', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={1}/>)
  hello.find('.btn-inc').simulate('click')
  expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!')
})