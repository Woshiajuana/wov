import SWITCH_ENV from './switch_env'
import BD_IP from './ip_bd_config'
/**===================本地环境====================*/
const BD_ENV = {
    BASE_URL: 'http://'+ BD_IP +':13140/dist/',
    SOURCES_URL: 'http://'+ BD_IP +':13140/src/assets/img/'
};

/**===================测试环境====================*/
const CS_ENV = {

};

/**===================准生产环境====================*/
const ZSC_ENV = {

};

/**===================生产环境====================*/
const SC_ENV = {
    BASE_URL: 'http://www.owulia.com/wov/js/',
    SOURCES_URL: 'http://www.owulia.com/wov/images/'
};

var ENV = {};

switch (SWITCH_ENV) {
    case 'BD':
        ENV = BD_ENV;
        break;
    case 'CS':
        ENV = CS_ENV;
        break;
    case 'ZSC':
        ENV = ZSC_ENV;
        break;
    case 'SC':
        ENV = SC_ENV;
        break;
}

export default ENV;
