exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('purchase', {
        id:             {
            type:       'bigserial',
            comment: "Айди товара"
        },
        name:             {
        type    :       'varchar(250)',

        },
        price:             {
            type    :       'bigint(250)',

        },
    }, {
        ifNotExists: true,
        comment:     'Таблица, где учитывается цена',
    });
};

exports.down = pgm => {
};
