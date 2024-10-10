import React from "react";
import Table from "./Table";
import ProductItem from "./products/ProductItem";
import ProductCategoryHeader from "./products/ProductCategoryHeader";

function ProductTable({headers, products}) {

    const sportingGoods = products.filter((product) => product.type);
    
    return (
        <div>
            <Table.TableContainer>

                <Table.THead>
                    <Table.Row>
                        <Table.ColumnHeader>Name</Table.ColumnHeader>
                        <Table.ColumnHeader>Price</Table.ColumnHeader>
                    </Table.Row>
                </Table.THead>

                <Table.TBody>
                    <ProductCategoryHeader text={"Sporting Goods"}/>
                    {sportingGoods.map(({id,name,price,type}) => (<ProductItem key={"${type}-${id}"} name={name} price={price}/>))}
                    <ProductItem name="Tennis" price={99.9}/>
                    <ProductItem name="Badminton" price={59.9}/>
                    <ProductItem name="Basketball" price={99.9}/>

                    <ProductCategoryHeader text={"Electronics"}/>
                    <ProductItem name="IPod Touch" price={99.99}/>
                    <ProductItem name="IPhone 5" price={399.99}/>
                    <ProductItem name="Nexus 7" price={199.99}/>
                </Table.TBody>

                <Table.TFoot>
                    <Table.Row>
                        <Table.ColumnHeader>TOTAL</Table.ColumnHeader>
                        <Table.ColumnH>${products.reduce}</Table.ColumnH>
                    </Table.Row>
                </Table.TFoot>

            </Table.TableContainer>
        </div>
    )
}

export default ProductTable;
