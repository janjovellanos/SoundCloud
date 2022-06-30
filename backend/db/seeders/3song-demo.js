'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Songs', [
      {
        userId: 1,
        albumId: 1,
        title: 'Song 1',
        description: 'description of Song 1',
        audioUrl: 'URL of Song 1',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/1.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIDTKDltaf6FiHNZKp6yA72Yr7N9i%2BTr0rW8QfP%2B%2Bfr01AiEAvnZdXJHGs9rio3laYzpoV%2B93Nnbq2RwyRWh2qfN9oUQq5AIIHxAAGgw4MjYwODQ2NTQ3NDUiDFx%2B1ndN%2BoqbA5REuirBAj0fr30wHQIOG3rYmpht2fcovOE0hV7u4Vh5cUNaMZG7r47obKr%2BM%2BgxoyDxqlE4oVN0WT4RDB94gn%2BVNblw3NR%2Fr2oFmWNa0VwZijHvctTxSutwbih3YXaqL5t7CCG1%2BW0ZGhlqnROgaW5%2B%2B6CgLlfP4VvVPK%2F3pMH%2B%2BhJBjIZcQvZ74x30Sqt9C0qYJ3A90ZG24DvgvMvrcmSz8UGbfzKpWaU1c14c8kgIATDwmg8X0ZYq3Ah0V2ICNgMh9WX0BK2BrCWUhqpJRlrLPWFGjfhSAlhloUmWI5WfLZ56bnlBwTDMPK%2BtU1MYRxUmBbGWR9lNl7CrSDW9pWqd3%2BGzMtb0BPLjYANhCJi64z5A81I7DXksXRVu50RXhC%2FS6JkjTAArIWaaTAt6IC9JLnpj6JcEJIlhrs8s8dGUd4VYRpdb%2BDCln%2FOVBjqzAmuogaBkpjKtO53aLVvxXlkQk%2FDfGoiM8HhQ9NR5L2fHjOLVN5qKzH57vfSU1Z0yLI6pqp5U9Z1fYwfW0JocVGeU86%2BiI3BgeIFpkrvM56wn85sMuK9koSR6QvhSZabijbp%2F85yJoXDzkxLHpletJ8Wa8z9u4LPWTcRlr1tSByHdHRaXULbh%2FOD1Rr169O6uelH6at53WMFMgiRSVCU977OFEmeOQlFLcYg1XIAROZGwuF12udUGRBKSunKZ0psN3riYdNPKFkqejj7BA7PgdRwL%2FhbmAmVvZsuYO2DMY3NmWOHQCBj5TKMLOQk9to61GRoxujKKohw%2BcncxJI0jlsz54xBXlNOBsVadRzwL1medy78HE8o5gB6Y%2Fu7g3KTDPkidSVH15y2CGpIclEhWQybaA0I%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220630T022555Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4AVT3P2MXE5SJGUL%2F20220630%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=db8cca861ada7cbde2860c670adbed006d3ebfcfd8d3c818c3603583934bf8b3',
      },
      {
        userId: 1,
        albumId: 1,
        title: 'Song 2',
        description: 'description of Song 2',
        audioUrl: 'URL of Song 2',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/2.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIDTKDltaf6FiHNZKp6yA72Yr7N9i%2BTr0rW8QfP%2B%2Bfr01AiEAvnZdXJHGs9rio3laYzpoV%2B93Nnbq2RwyRWh2qfN9oUQq5AIIHxAAGgw4MjYwODQ2NTQ3NDUiDFx%2B1ndN%2BoqbA5REuirBAj0fr30wHQIOG3rYmpht2fcovOE0hV7u4Vh5cUNaMZG7r47obKr%2BM%2BgxoyDxqlE4oVN0WT4RDB94gn%2BVNblw3NR%2Fr2oFmWNa0VwZijHvctTxSutwbih3YXaqL5t7CCG1%2BW0ZGhlqnROgaW5%2B%2B6CgLlfP4VvVPK%2F3pMH%2B%2BhJBjIZcQvZ74x30Sqt9C0qYJ3A90ZG24DvgvMvrcmSz8UGbfzKpWaU1c14c8kgIATDwmg8X0ZYq3Ah0V2ICNgMh9WX0BK2BrCWUhqpJRlrLPWFGjfhSAlhloUmWI5WfLZ56bnlBwTDMPK%2BtU1MYRxUmBbGWR9lNl7CrSDW9pWqd3%2BGzMtb0BPLjYANhCJi64z5A81I7DXksXRVu50RXhC%2FS6JkjTAArIWaaTAt6IC9JLnpj6JcEJIlhrs8s8dGUd4VYRpdb%2BDCln%2FOVBjqzAmuogaBkpjKtO53aLVvxXlkQk%2FDfGoiM8HhQ9NR5L2fHjOLVN5qKzH57vfSU1Z0yLI6pqp5U9Z1fYwfW0JocVGeU86%2BiI3BgeIFpkrvM56wn85sMuK9koSR6QvhSZabijbp%2F85yJoXDzkxLHpletJ8Wa8z9u4LPWTcRlr1tSByHdHRaXULbh%2FOD1Rr169O6uelH6at53WMFMgiRSVCU977OFEmeOQlFLcYg1XIAROZGwuF12udUGRBKSunKZ0psN3riYdNPKFkqejj7BA7PgdRwL%2FhbmAmVvZsuYO2DMY3NmWOHQCBj5TKMLOQk9to61GRoxujKKohw%2BcncxJI0jlsz54xBXlNOBsVadRzwL1medy78HE8o5gB6Y%2Fu7g3KTDPkidSVH15y2CGpIclEhWQybaA0I%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220630T022617Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4AVT3P2MXE5SJGUL%2F20220630%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=4c2ddb36fa5912408cab13b8a14d3d1783206db9f6354d3862f1009d2ec92d5f',
      },
      {
        userId: 2,
        albumId: 2,
        title: 'Song 3',
        description: 'description of Song 3',
        audioUrl: 'URL of Song 3',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/3.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIDTKDltaf6FiHNZKp6yA72Yr7N9i%2BTr0rW8QfP%2B%2Bfr01AiEAvnZdXJHGs9rio3laYzpoV%2B93Nnbq2RwyRWh2qfN9oUQq5AIIHxAAGgw4MjYwODQ2NTQ3NDUiDFx%2B1ndN%2BoqbA5REuirBAj0fr30wHQIOG3rYmpht2fcovOE0hV7u4Vh5cUNaMZG7r47obKr%2BM%2BgxoyDxqlE4oVN0WT4RDB94gn%2BVNblw3NR%2Fr2oFmWNa0VwZijHvctTxSutwbih3YXaqL5t7CCG1%2BW0ZGhlqnROgaW5%2B%2B6CgLlfP4VvVPK%2F3pMH%2B%2BhJBjIZcQvZ74x30Sqt9C0qYJ3A90ZG24DvgvMvrcmSz8UGbfzKpWaU1c14c8kgIATDwmg8X0ZYq3Ah0V2ICNgMh9WX0BK2BrCWUhqpJRlrLPWFGjfhSAlhloUmWI5WfLZ56bnlBwTDMPK%2BtU1MYRxUmBbGWR9lNl7CrSDW9pWqd3%2BGzMtb0BPLjYANhCJi64z5A81I7DXksXRVu50RXhC%2FS6JkjTAArIWaaTAt6IC9JLnpj6JcEJIlhrs8s8dGUd4VYRpdb%2BDCln%2FOVBjqzAmuogaBkpjKtO53aLVvxXlkQk%2FDfGoiM8HhQ9NR5L2fHjOLVN5qKzH57vfSU1Z0yLI6pqp5U9Z1fYwfW0JocVGeU86%2BiI3BgeIFpkrvM56wn85sMuK9koSR6QvhSZabijbp%2F85yJoXDzkxLHpletJ8Wa8z9u4LPWTcRlr1tSByHdHRaXULbh%2FOD1Rr169O6uelH6at53WMFMgiRSVCU977OFEmeOQlFLcYg1XIAROZGwuF12udUGRBKSunKZ0psN3riYdNPKFkqejj7BA7PgdRwL%2FhbmAmVvZsuYO2DMY3NmWOHQCBj5TKMLOQk9to61GRoxujKKohw%2BcncxJI0jlsz54xBXlNOBsVadRzwL1medy78HE8o5gB6Y%2Fu7g3KTDPkidSVH15y2CGpIclEhWQybaA0I%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220630T022643Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4AVT3P2MXE5SJGUL%2F20220630%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=a53d5e27ab659352e528ae4209a6d97b21ae5252fa484204abe8f1917b4cbb26',
      },
      {
        userId: 2,
        albumId: 2,
        title: 'Song 4',
        description: 'description of Song 4',
        audioUrl: 'URL of Song 4',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/4.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIDTKDltaf6FiHNZKp6yA72Yr7N9i%2BTr0rW8QfP%2B%2Bfr01AiEAvnZdXJHGs9rio3laYzpoV%2B93Nnbq2RwyRWh2qfN9oUQq5AIIHxAAGgw4MjYwODQ2NTQ3NDUiDFx%2B1ndN%2BoqbA5REuirBAj0fr30wHQIOG3rYmpht2fcovOE0hV7u4Vh5cUNaMZG7r47obKr%2BM%2BgxoyDxqlE4oVN0WT4RDB94gn%2BVNblw3NR%2Fr2oFmWNa0VwZijHvctTxSutwbih3YXaqL5t7CCG1%2BW0ZGhlqnROgaW5%2B%2B6CgLlfP4VvVPK%2F3pMH%2B%2BhJBjIZcQvZ74x30Sqt9C0qYJ3A90ZG24DvgvMvrcmSz8UGbfzKpWaU1c14c8kgIATDwmg8X0ZYq3Ah0V2ICNgMh9WX0BK2BrCWUhqpJRlrLPWFGjfhSAlhloUmWI5WfLZ56bnlBwTDMPK%2BtU1MYRxUmBbGWR9lNl7CrSDW9pWqd3%2BGzMtb0BPLjYANhCJi64z5A81I7DXksXRVu50RXhC%2FS6JkjTAArIWaaTAt6IC9JLnpj6JcEJIlhrs8s8dGUd4VYRpdb%2BDCln%2FOVBjqzAmuogaBkpjKtO53aLVvxXlkQk%2FDfGoiM8HhQ9NR5L2fHjOLVN5qKzH57vfSU1Z0yLI6pqp5U9Z1fYwfW0JocVGeU86%2BiI3BgeIFpkrvM56wn85sMuK9koSR6QvhSZabijbp%2F85yJoXDzkxLHpletJ8Wa8z9u4LPWTcRlr1tSByHdHRaXULbh%2FOD1Rr169O6uelH6at53WMFMgiRSVCU977OFEmeOQlFLcYg1XIAROZGwuF12udUGRBKSunKZ0psN3riYdNPKFkqejj7BA7PgdRwL%2FhbmAmVvZsuYO2DMY3NmWOHQCBj5TKMLOQk9to61GRoxujKKohw%2BcncxJI0jlsz54xBXlNOBsVadRzwL1medy78HE8o5gB6Y%2Fu7g3KTDPkidSVH15y2CGpIclEhWQybaA0I%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220630T022657Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4AVT3P2MXE5SJGUL%2F20220630%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=84dc68d15784f172f7ea9e030924e724927a84805b5ccc0ee4b920da766c1b6d',
      },
      {
        userId: 3,
        albumId: 3,
        title: 'Song 5',
        description: 'description of Song 5',
        audioUrl: 'URL of Song 5',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/5.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIDTKDltaf6FiHNZKp6yA72Yr7N9i%2BTr0rW8QfP%2B%2Bfr01AiEAvnZdXJHGs9rio3laYzpoV%2B93Nnbq2RwyRWh2qfN9oUQq5AIIHxAAGgw4MjYwODQ2NTQ3NDUiDFx%2B1ndN%2BoqbA5REuirBAj0fr30wHQIOG3rYmpht2fcovOE0hV7u4Vh5cUNaMZG7r47obKr%2BM%2BgxoyDxqlE4oVN0WT4RDB94gn%2BVNblw3NR%2Fr2oFmWNa0VwZijHvctTxSutwbih3YXaqL5t7CCG1%2BW0ZGhlqnROgaW5%2B%2B6CgLlfP4VvVPK%2F3pMH%2B%2BhJBjIZcQvZ74x30Sqt9C0qYJ3A90ZG24DvgvMvrcmSz8UGbfzKpWaU1c14c8kgIATDwmg8X0ZYq3Ah0V2ICNgMh9WX0BK2BrCWUhqpJRlrLPWFGjfhSAlhloUmWI5WfLZ56bnlBwTDMPK%2BtU1MYRxUmBbGWR9lNl7CrSDW9pWqd3%2BGzMtb0BPLjYANhCJi64z5A81I7DXksXRVu50RXhC%2FS6JkjTAArIWaaTAt6IC9JLnpj6JcEJIlhrs8s8dGUd4VYRpdb%2BDCln%2FOVBjqzAmuogaBkpjKtO53aLVvxXlkQk%2FDfGoiM8HhQ9NR5L2fHjOLVN5qKzH57vfSU1Z0yLI6pqp5U9Z1fYwfW0JocVGeU86%2BiI3BgeIFpkrvM56wn85sMuK9koSR6QvhSZabijbp%2F85yJoXDzkxLHpletJ8Wa8z9u4LPWTcRlr1tSByHdHRaXULbh%2FOD1Rr169O6uelH6at53WMFMgiRSVCU977OFEmeOQlFLcYg1XIAROZGwuF12udUGRBKSunKZ0psN3riYdNPKFkqejj7BA7PgdRwL%2FhbmAmVvZsuYO2DMY3NmWOHQCBj5TKMLOQk9to61GRoxujKKohw%2BcncxJI0jlsz54xBXlNOBsVadRzwL1medy78HE8o5gB6Y%2Fu7g3KTDPkidSVH15y2CGpIclEhWQybaA0I%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220630T022723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4AVT3P2MXE5SJGUL%2F20220630%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=b2e6012478fad1b4e9ca2360d8d32fd2860e6a2cad4afc6782129456daa47a44',
      },
      {
        userId: 3,
        albumId: 3,
        title: 'Song 6',
        description: 'description of Song 6',
        audioUrl: 'URL of Song 6',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/6.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIDTKDltaf6FiHNZKp6yA72Yr7N9i%2BTr0rW8QfP%2B%2Bfr01AiEAvnZdXJHGs9rio3laYzpoV%2B93Nnbq2RwyRWh2qfN9oUQq5AIIHxAAGgw4MjYwODQ2NTQ3NDUiDFx%2B1ndN%2BoqbA5REuirBAj0fr30wHQIOG3rYmpht2fcovOE0hV7u4Vh5cUNaMZG7r47obKr%2BM%2BgxoyDxqlE4oVN0WT4RDB94gn%2BVNblw3NR%2Fr2oFmWNa0VwZijHvctTxSutwbih3YXaqL5t7CCG1%2BW0ZGhlqnROgaW5%2B%2B6CgLlfP4VvVPK%2F3pMH%2B%2BhJBjIZcQvZ74x30Sqt9C0qYJ3A90ZG24DvgvMvrcmSz8UGbfzKpWaU1c14c8kgIATDwmg8X0ZYq3Ah0V2ICNgMh9WX0BK2BrCWUhqpJRlrLPWFGjfhSAlhloUmWI5WfLZ56bnlBwTDMPK%2BtU1MYRxUmBbGWR9lNl7CrSDW9pWqd3%2BGzMtb0BPLjYANhCJi64z5A81I7DXksXRVu50RXhC%2FS6JkjTAArIWaaTAt6IC9JLnpj6JcEJIlhrs8s8dGUd4VYRpdb%2BDCln%2FOVBjqzAmuogaBkpjKtO53aLVvxXlkQk%2FDfGoiM8HhQ9NR5L2fHjOLVN5qKzH57vfSU1Z0yLI6pqp5U9Z1fYwfW0JocVGeU86%2BiI3BgeIFpkrvM56wn85sMuK9koSR6QvhSZabijbp%2F85yJoXDzkxLHpletJ8Wa8z9u4LPWTcRlr1tSByHdHRaXULbh%2FOD1Rr169O6uelH6at53WMFMgiRSVCU977OFEmeOQlFLcYg1XIAROZGwuF12udUGRBKSunKZ0psN3riYdNPKFkqejj7BA7PgdRwL%2FhbmAmVvZsuYO2DMY3NmWOHQCBj5TKMLOQk9to61GRoxujKKohw%2BcncxJI0jlsz54xBXlNOBsVadRzwL1medy78HE8o5gB6Y%2Fu7g3KTDPkidSVH15y2CGpIclEhWQybaA0I%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220630T022747Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4AVT3P2MXE5SJGUL%2F20220630%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=d027b870c9fb22bdb18dbff89a4d5d60fffe8d82c481c4d984f8d2e2355b5a79',
      },
      {
        userId: 4,
        albumId: 4,
        title: 'Crank That (Soulja Boy)',
        description: 'superman',
        audioUrl: 'URL of Song',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/crank-dat.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIDTKDltaf6FiHNZKp6yA72Yr7N9i%2BTr0rW8QfP%2B%2Bfr01AiEAvnZdXJHGs9rio3laYzpoV%2B93Nnbq2RwyRWh2qfN9oUQq5AIIHxAAGgw4MjYwODQ2NTQ3NDUiDFx%2B1ndN%2BoqbA5REuirBAj0fr30wHQIOG3rYmpht2fcovOE0hV7u4Vh5cUNaMZG7r47obKr%2BM%2BgxoyDxqlE4oVN0WT4RDB94gn%2BVNblw3NR%2Fr2oFmWNa0VwZijHvctTxSutwbih3YXaqL5t7CCG1%2BW0ZGhlqnROgaW5%2B%2B6CgLlfP4VvVPK%2F3pMH%2B%2BhJBjIZcQvZ74x30Sqt9C0qYJ3A90ZG24DvgvMvrcmSz8UGbfzKpWaU1c14c8kgIATDwmg8X0ZYq3Ah0V2ICNgMh9WX0BK2BrCWUhqpJRlrLPWFGjfhSAlhloUmWI5WfLZ56bnlBwTDMPK%2BtU1MYRxUmBbGWR9lNl7CrSDW9pWqd3%2BGzMtb0BPLjYANhCJi64z5A81I7DXksXRVu50RXhC%2FS6JkjTAArIWaaTAt6IC9JLnpj6JcEJIlhrs8s8dGUd4VYRpdb%2BDCln%2FOVBjqzAmuogaBkpjKtO53aLVvxXlkQk%2FDfGoiM8HhQ9NR5L2fHjOLVN5qKzH57vfSU1Z0yLI6pqp5U9Z1fYwfW0JocVGeU86%2BiI3BgeIFpkrvM56wn85sMuK9koSR6QvhSZabijbp%2F85yJoXDzkxLHpletJ8Wa8z9u4LPWTcRlr1tSByHdHRaXULbh%2FOD1Rr169O6uelH6at53WMFMgiRSVCU977OFEmeOQlFLcYg1XIAROZGwuF12udUGRBKSunKZ0psN3riYdNPKFkqejj7BA7PgdRwL%2FhbmAmVvZsuYO2DMY3NmWOHQCBj5TKMLOQk9to61GRoxujKKohw%2BcncxJI0jlsz54xBXlNOBsVadRzwL1medy78HE8o5gB6Y%2Fu7g3KTDPkidSVH15y2CGpIclEhWQybaA0I%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220630T022826Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4AVT3P2MXE5SJGUL%2F20220630%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=899c67cfecfb96a1975c61fcff135e0c31f449d4b29d6d1c963ab355344a4b30',
      },
      {
        userId: 4,
        albumId: 4,
        title: 'Kiss Me Thru The Phone',
        description: '678-999-8212',
        audioUrl: 'URL of Song',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/crank-dat.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIDTKDltaf6FiHNZKp6yA72Yr7N9i%2BTr0rW8QfP%2B%2Bfr01AiEAvnZdXJHGs9rio3laYzpoV%2B93Nnbq2RwyRWh2qfN9oUQq5AIIHxAAGgw4MjYwODQ2NTQ3NDUiDFx%2B1ndN%2BoqbA5REuirBAj0fr30wHQIOG3rYmpht2fcovOE0hV7u4Vh5cUNaMZG7r47obKr%2BM%2BgxoyDxqlE4oVN0WT4RDB94gn%2BVNblw3NR%2Fr2oFmWNa0VwZijHvctTxSutwbih3YXaqL5t7CCG1%2BW0ZGhlqnROgaW5%2B%2B6CgLlfP4VvVPK%2F3pMH%2B%2BhJBjIZcQvZ74x30Sqt9C0qYJ3A90ZG24DvgvMvrcmSz8UGbfzKpWaU1c14c8kgIATDwmg8X0ZYq3Ah0V2ICNgMh9WX0BK2BrCWUhqpJRlrLPWFGjfhSAlhloUmWI5WfLZ56bnlBwTDMPK%2BtU1MYRxUmBbGWR9lNl7CrSDW9pWqd3%2BGzMtb0BPLjYANhCJi64z5A81I7DXksXRVu50RXhC%2FS6JkjTAArIWaaTAt6IC9JLnpj6JcEJIlhrs8s8dGUd4VYRpdb%2BDCln%2FOVBjqzAmuogaBkpjKtO53aLVvxXlkQk%2FDfGoiM8HhQ9NR5L2fHjOLVN5qKzH57vfSU1Z0yLI6pqp5U9Z1fYwfW0JocVGeU86%2BiI3BgeIFpkrvM56wn85sMuK9koSR6QvhSZabijbp%2F85yJoXDzkxLHpletJ8Wa8z9u4LPWTcRlr1tSByHdHRaXULbh%2FOD1Rr169O6uelH6at53WMFMgiRSVCU977OFEmeOQlFLcYg1XIAROZGwuF12udUGRBKSunKZ0psN3riYdNPKFkqejj7BA7PgdRwL%2FhbmAmVvZsuYO2DMY3NmWOHQCBj5TKMLOQk9to61GRoxujKKohw%2BcncxJI0jlsz54xBXlNOBsVadRzwL1medy78HE8o5gB6Y%2Fu7g3KTDPkidSVH15y2CGpIclEhWQybaA0I%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220630T022826Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4AVT3P2MXE5SJGUL%2F20220630%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=899c67cfecfb96a1975c61fcff135e0c31f449d4b29d6d1c963ab355344a4b30',
      },
      {
        userId: 5,
        albumId: 5,
        title: 'Complicated',
        description: 'why',
        audioUrl: 'URL of Song',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/complicated.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIDTKDltaf6FiHNZKp6yA72Yr7N9i%2BTr0rW8QfP%2B%2Bfr01AiEAvnZdXJHGs9rio3laYzpoV%2B93Nnbq2RwyRWh2qfN9oUQq5AIIHxAAGgw4MjYwODQ2NTQ3NDUiDFx%2B1ndN%2BoqbA5REuirBAj0fr30wHQIOG3rYmpht2fcovOE0hV7u4Vh5cUNaMZG7r47obKr%2BM%2BgxoyDxqlE4oVN0WT4RDB94gn%2BVNblw3NR%2Fr2oFmWNa0VwZijHvctTxSutwbih3YXaqL5t7CCG1%2BW0ZGhlqnROgaW5%2B%2B6CgLlfP4VvVPK%2F3pMH%2B%2BhJBjIZcQvZ74x30Sqt9C0qYJ3A90ZG24DvgvMvrcmSz8UGbfzKpWaU1c14c8kgIATDwmg8X0ZYq3Ah0V2ICNgMh9WX0BK2BrCWUhqpJRlrLPWFGjfhSAlhloUmWI5WfLZ56bnlBwTDMPK%2BtU1MYRxUmBbGWR9lNl7CrSDW9pWqd3%2BGzMtb0BPLjYANhCJi64z5A81I7DXksXRVu50RXhC%2FS6JkjTAArIWaaTAt6IC9JLnpj6JcEJIlhrs8s8dGUd4VYRpdb%2BDCln%2FOVBjqzAmuogaBkpjKtO53aLVvxXlkQk%2FDfGoiM8HhQ9NR5L2fHjOLVN5qKzH57vfSU1Z0yLI6pqp5U9Z1fYwfW0JocVGeU86%2BiI3BgeIFpkrvM56wn85sMuK9koSR6QvhSZabijbp%2F85yJoXDzkxLHpletJ8Wa8z9u4LPWTcRlr1tSByHdHRaXULbh%2FOD1Rr169O6uelH6at53WMFMgiRSVCU977OFEmeOQlFLcYg1XIAROZGwuF12udUGRBKSunKZ0psN3riYdNPKFkqejj7BA7PgdRwL%2FhbmAmVvZsuYO2DMY3NmWOHQCBj5TKMLOQk9to61GRoxujKKohw%2BcncxJI0jlsz54xBXlNOBsVadRzwL1medy78HE8o5gB6Y%2Fu7g3KTDPkidSVH15y2CGpIclEhWQybaA0I%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220630T022806Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4AVT3P2MXE5SJGUL%2F20220630%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=0bbd31585e14e5a76c4509f554d57ae5ff755fbf9eef68ecb3993684292cb6d5',
      },
      {
        userId: 5,
        albumId: 5,
        title: 'Sk8er Boi',
        description: 'rawr xD',
        audioUrl: 'URL of Song',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/complicated.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIDTKDltaf6FiHNZKp6yA72Yr7N9i%2BTr0rW8QfP%2B%2Bfr01AiEAvnZdXJHGs9rio3laYzpoV%2B93Nnbq2RwyRWh2qfN9oUQq5AIIHxAAGgw4MjYwODQ2NTQ3NDUiDFx%2B1ndN%2BoqbA5REuirBAj0fr30wHQIOG3rYmpht2fcovOE0hV7u4Vh5cUNaMZG7r47obKr%2BM%2BgxoyDxqlE4oVN0WT4RDB94gn%2BVNblw3NR%2Fr2oFmWNa0VwZijHvctTxSutwbih3YXaqL5t7CCG1%2BW0ZGhlqnROgaW5%2B%2B6CgLlfP4VvVPK%2F3pMH%2B%2BhJBjIZcQvZ74x30Sqt9C0qYJ3A90ZG24DvgvMvrcmSz8UGbfzKpWaU1c14c8kgIATDwmg8X0ZYq3Ah0V2ICNgMh9WX0BK2BrCWUhqpJRlrLPWFGjfhSAlhloUmWI5WfLZ56bnlBwTDMPK%2BtU1MYRxUmBbGWR9lNl7CrSDW9pWqd3%2BGzMtb0BPLjYANhCJi64z5A81I7DXksXRVu50RXhC%2FS6JkjTAArIWaaTAt6IC9JLnpj6JcEJIlhrs8s8dGUd4VYRpdb%2BDCln%2FOVBjqzAmuogaBkpjKtO53aLVvxXlkQk%2FDfGoiM8HhQ9NR5L2fHjOLVN5qKzH57vfSU1Z0yLI6pqp5U9Z1fYwfW0JocVGeU86%2BiI3BgeIFpkrvM56wn85sMuK9koSR6QvhSZabijbp%2F85yJoXDzkxLHpletJ8Wa8z9u4LPWTcRlr1tSByHdHRaXULbh%2FOD1Rr169O6uelH6at53WMFMgiRSVCU977OFEmeOQlFLcYg1XIAROZGwuF12udUGRBKSunKZ0psN3riYdNPKFkqejj7BA7PgdRwL%2FhbmAmVvZsuYO2DMY3NmWOHQCBj5TKMLOQk9to61GRoxujKKohw%2BcncxJI0jlsz54xBXlNOBsVadRzwL1medy78HE8o5gB6Y%2Fu7g3KTDPkidSVH15y2CGpIclEhWQybaA0I%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220630T022806Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4AVT3P2MXE5SJGUL%2F20220630%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=0bbd31585e14e5a76c4509f554d57ae5ff755fbf9eef68ecb3993684292cb6d5',
      },
      {
        userId: 6,
        albumId: 6,
        title: 'Move',
        description: 'please',
        audioUrl: 'URL of Song',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/luda-move.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIDTKDltaf6FiHNZKp6yA72Yr7N9i%2BTr0rW8QfP%2B%2Bfr01AiEAvnZdXJHGs9rio3laYzpoV%2B93Nnbq2RwyRWh2qfN9oUQq5AIIHxAAGgw4MjYwODQ2NTQ3NDUiDFx%2B1ndN%2BoqbA5REuirBAj0fr30wHQIOG3rYmpht2fcovOE0hV7u4Vh5cUNaMZG7r47obKr%2BM%2BgxoyDxqlE4oVN0WT4RDB94gn%2BVNblw3NR%2Fr2oFmWNa0VwZijHvctTxSutwbih3YXaqL5t7CCG1%2BW0ZGhlqnROgaW5%2B%2B6CgLlfP4VvVPK%2F3pMH%2B%2BhJBjIZcQvZ74x30Sqt9C0qYJ3A90ZG24DvgvMvrcmSz8UGbfzKpWaU1c14c8kgIATDwmg8X0ZYq3Ah0V2ICNgMh9WX0BK2BrCWUhqpJRlrLPWFGjfhSAlhloUmWI5WfLZ56bnlBwTDMPK%2BtU1MYRxUmBbGWR9lNl7CrSDW9pWqd3%2BGzMtb0BPLjYANhCJi64z5A81I7DXksXRVu50RXhC%2FS6JkjTAArIWaaTAt6IC9JLnpj6JcEJIlhrs8s8dGUd4VYRpdb%2BDCln%2FOVBjqzAmuogaBkpjKtO53aLVvxXlkQk%2FDfGoiM8HhQ9NR5L2fHjOLVN5qKzH57vfSU1Z0yLI6pqp5U9Z1fYwfW0JocVGeU86%2BiI3BgeIFpkrvM56wn85sMuK9koSR6QvhSZabijbp%2F85yJoXDzkxLHpletJ8Wa8z9u4LPWTcRlr1tSByHdHRaXULbh%2FOD1Rr169O6uelH6at53WMFMgiRSVCU977OFEmeOQlFLcYg1XIAROZGwuF12udUGRBKSunKZ0psN3riYdNPKFkqejj7BA7PgdRwL%2FhbmAmVvZsuYO2DMY3NmWOHQCBj5TKMLOQk9to61GRoxujKKohw%2BcncxJI0jlsz54xBXlNOBsVadRzwL1medy78HE8o5gB6Y%2Fu7g3KTDPkidSVH15y2CGpIclEhWQybaA0I%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220630T022850Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4AVT3P2MXE5SJGUL%2F20220630%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=ecc994f508baa259d769517301430180cb764c9396c6a6d748fd39af9c79248f',
      },
      {
        userId: 6,
        albumId: 6,
        title: 'Area Codes',
        description: 'funky',
        audioUrl: 'URL of Song',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/luda-move.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIDTKDltaf6FiHNZKp6yA72Yr7N9i%2BTr0rW8QfP%2B%2Bfr01AiEAvnZdXJHGs9rio3laYzpoV%2B93Nnbq2RwyRWh2qfN9oUQq5AIIHxAAGgw4MjYwODQ2NTQ3NDUiDFx%2B1ndN%2BoqbA5REuirBAj0fr30wHQIOG3rYmpht2fcovOE0hV7u4Vh5cUNaMZG7r47obKr%2BM%2BgxoyDxqlE4oVN0WT4RDB94gn%2BVNblw3NR%2Fr2oFmWNa0VwZijHvctTxSutwbih3YXaqL5t7CCG1%2BW0ZGhlqnROgaW5%2B%2B6CgLlfP4VvVPK%2F3pMH%2B%2BhJBjIZcQvZ74x30Sqt9C0qYJ3A90ZG24DvgvMvrcmSz8UGbfzKpWaU1c14c8kgIATDwmg8X0ZYq3Ah0V2ICNgMh9WX0BK2BrCWUhqpJRlrLPWFGjfhSAlhloUmWI5WfLZ56bnlBwTDMPK%2BtU1MYRxUmBbGWR9lNl7CrSDW9pWqd3%2BGzMtb0BPLjYANhCJi64z5A81I7DXksXRVu50RXhC%2FS6JkjTAArIWaaTAt6IC9JLnpj6JcEJIlhrs8s8dGUd4VYRpdb%2BDCln%2FOVBjqzAmuogaBkpjKtO53aLVvxXlkQk%2FDfGoiM8HhQ9NR5L2fHjOLVN5qKzH57vfSU1Z0yLI6pqp5U9Z1fYwfW0JocVGeU86%2BiI3BgeIFpkrvM56wn85sMuK9koSR6QvhSZabijbp%2F85yJoXDzkxLHpletJ8Wa8z9u4LPWTcRlr1tSByHdHRaXULbh%2FOD1Rr169O6uelH6at53WMFMgiRSVCU977OFEmeOQlFLcYg1XIAROZGwuF12udUGRBKSunKZ0psN3riYdNPKFkqejj7BA7PgdRwL%2FhbmAmVvZsuYO2DMY3NmWOHQCBj5TKMLOQk9to61GRoxujKKohw%2BcncxJI0jlsz54xBXlNOBsVadRzwL1medy78HE8o5gB6Y%2Fu7g3KTDPkidSVH15y2CGpIclEhWQybaA0I%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220630T022850Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4AVT3P2MXE5SJGUL%2F20220630%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=ecc994f508baa259d769517301430180cb764c9396c6a6d748fd39af9c79248f',
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Songs', {
      title: ['Song 1', 'Song 2', 'Song 3', 'Song 4', 'Song 5', 'Song 6', 'Crank That (Soulja Boy)', 'Kiss Me Thru The Phone', 'Complicated', 'Sk8er Boi', 'Move', 'Area Codes']
    })
  }
};
