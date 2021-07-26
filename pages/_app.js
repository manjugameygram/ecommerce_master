import '../public/assets/styles/bootstrap.min.css';
import '../public/assets/styles/fontawesome.min.css';
import '../public/assets/styles/animate.min.css';
import '../public/assets/styles/slick.css';
import '../public/assets/styles/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import '../public/assets/styles/style.scss';
import '../public/assets/styles/responsive.css';
import '../public/assets/styles/custom.css';

import Layout from '../components/App/Layout';
import { Provider } from 'react-redux';
import configureStore from './../redux/store';
const store = configureStore();
const MyApp = ({ Component }) => {
    return (
        <Layout>
            <Provider store={store}>
                <Component />
            </Provider>
        </Layout>
    );
}

export default MyApp;