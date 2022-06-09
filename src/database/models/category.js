module.exports = (sequelize, dataTypes) => {
    let alias = "Category";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nameCategory: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
    }

    let config = {
        tableName: "categories",
        timestamps: false,
    }

    const Category = sequelize.define(alias, cols, config);

    Category.associate = (models)=>{
        Category.hasMany(models.Product,{
            as: "products",
            foreignKey: "category_id" ,        
        })  
    }

    return Category;
}