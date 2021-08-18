// import { configure,shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import NavigationItems from './NavigationItems';

// import React from 'react';

// import NavigationItem from './NavigationItem/NavigationItem';

// //shallow helps to render in many circumstances
// configure({adapter: new Adapter()});

// describe('<NavigationItems />',() =>{
//     // beforeEach or afterEach
//     let wrapper;

//     beforeEach(() => {
//         wrapper =  shallow(<NavigationItems />);

//     });
//     //actaul Test
//     it('should render two <NavigationItem /> elements if not authenticated',() => { //allows to write one test at a time
//         //acutal Testing logic  
//         //expectations
//         expect(wrapper.find(NavigationItem)).toHaveLength(2);
//     });

//     //actaul Test
//     it('should render three <NavigationItem /> elements if authenticated',() => { //allows to write one test at a time
//         //acutal Testing logic
//         // const wrapper = shallow(<NavigationItems  isAuthenticated/>);
//         wrapper.setProps({isAuthenticated: true});
//         //expectations
//         expect(wrapper.find(NavigationItem)).toHaveLength(3);
//     });

//     //actaul Test
//     it('Is there logout or not',() => { //allows to write one test at a time
//         //without wrapper it will fail, because there is no authenticated
//         wrapper.setProps({isAuthenticated: true});
//         expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
//     });

// });