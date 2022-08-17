import './index.scss';

export default {
  name: 'LogoComponent',
  data() {
    return {
      logo: require('@/assets/images/logo.png')
    };
  },
  render() {
    return (
      <div class="logo">
        <img src={this.logo} />
      </div>
    );
  }
};
