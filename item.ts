import {DATE, INTEGER, Model, STRING} from 'sequelize';
import {sequelize} from './config';

export class Item extends Model {
}

Item.init({
    itemId: {
        type: INTEGER,
        primaryKey: true
    },
    name: {
        type: STRING(50),
    },
    createdBy: {
        type: STRING(50),
    },
    lastModifiedBy: {
        type: STRING(50),
    },
    createdDate: {
        type: DATE,
    },
    lastModifiedDate: {
        type: DATE,
    }
}, {
    sequelize,
    tableName: 'item',
    timestamps: false,
    underscored: true
});