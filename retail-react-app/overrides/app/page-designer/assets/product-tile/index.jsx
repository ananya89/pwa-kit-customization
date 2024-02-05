import React from 'react'
import PropTypes from 'prop-types'
import {Box} from '@salesforce/retail-react-app/app/components/shared/ui'
import {useProduct} from '@salesforce/commerce-sdk-react'

export const ProductTile = ({product, displayRatings}) => {
    const {data: productObj, isLoading: isProductLoading} = useProduct(
        {
            parameters: {
                id: product,
                allImages: true
            }
        },
        {
            // When shoppers select a different variant (and the app fetches the new data),
            // the old data is still rendered (and not the skeletons).
            keepPreviousData: true
        }
    )
    return (
        <Box className={'product-tile'}>
            <div>
                {!isProductLoading && (
                    <>
                        <img
                            src={productObj.imageGroups[0].images[0].link}
                            alt={productObj.imageGroups[0].images[0].title}
                        />
                        <div className="color-swatches">
                            <div className="swatches">
                                <a
                                    href="/page-viewer/product"
                                    aria-label={productObj.imageGroups[6].images[0].title}
                                >
                                    <span>
                                        <img
                                            className="swatch swatch-circle"
                                            data-index="0.0"
                                            src={productObj.imageGroups[6].images[0].link}
                                            alt={productObj.imageGroups[6].images[0].title}
                                        />
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="pdp-link">
                            <a className="link" href="/page-viewer/product">
                                {productObj.name}
                            </a>
                        </div>
                    </>
                )}
            </div>
            <div>{displayRatings}</div>
        </Box>
    )
}

ProductTile.propTypes = {
    product: PropTypes.string,
    displayRatings: PropTypes.bool
}

export default ProductTile
