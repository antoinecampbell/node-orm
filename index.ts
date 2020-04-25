import {sequelize} from './config';
import {Item} from './item';

async function getItems() {
    try {
        return await Item.findAll({raw: true});
    } catch (e) {
        console.error(e);
    } finally {
        sequelize.close();
    }
}

async function getItem(itemId: number) {
    try {
        return await Item.findByPk(itemId, {raw: true});
    } catch (e) {
        console.error(e);
    } finally {
        sequelize.close();
    }
}

getItems().then(items => console.log(items))
    .catch(error => console.error(error));

getItem(1).then(item => console.log(item))
    .catch(error => console.error(error));