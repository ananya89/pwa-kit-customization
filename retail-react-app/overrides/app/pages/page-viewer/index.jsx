import React from 'react'
import PropTypes from 'prop-types'
import {useParams} from 'react-router-dom'
import {Box} from '@salesforce/retail-react-app/app/components/shared/ui'
import {usePage} from '@salesforce/commerce-sdk-react'
import {Page} from '@salesforce/commerce-sdk-react/components'
import {ImageTile, ImageWithText} from '@salesforce/retail-react-app/app/page-designer/assets'
import {
    Carousel,
    MobileGrid1r1c,
    MobileGrid2r1c,
    MobileGrid2r2c,
    MobileGrid2r3c,
    MobileGrid3r1c,
    MobileGrid3r2c
} from '@salesforce/retail-react-app/app/page-designer/layouts'

import {HTTPError, HTTPNotFound} from '@salesforce/pwa-kit-react-sdk/ssr/universal/errors'
import {ProductTile} from '../../page-designer/assets'

const PAGEDESIGNER_TO_COMPONENT = {
    'commerce_assets.photoTile': ImageTile,
    'commerce_assets.imageAndText': ImageWithText,
    'commerce_layouts.carousel': Carousel,
    'commerce_layouts.mobileGrid1r1c': MobileGrid1r1c,
    'commerce_layouts.mobileGrid2r1c': MobileGrid2r1c,
    'commerce_layouts.mobileGrid2r2c': MobileGrid2r2c,
    'commerce_layouts.mobileGrid2r3c': MobileGrid2r3c,
    'commerce_layouts.mobileGrid3r1c': MobileGrid3r1c,
    'commerce_layouts.mobileGrid3r2c': MobileGrid3r2c,
    'commerce_assets.editorialRichText': (props) => <div  name={props.name} ><div dangerouslySetInnerHTML={{__html: props.richText}}/>{props.children}</div> ,
    'commerce_assets.productTile': ProductTile,
    'commerce_assets.category': (props) => <div  name={props.name} >{props.category} <div> {props.children} </div></div>
}

const PageViewer = (props) => {
    const {pageId} = useParams()
    const {data: page, error} = usePage({parameters: {pageId: pageId || props.pageIdProp}})

    if (error) {
        let ErrorClass = error.response?.status === 404 ? HTTPNotFound : HTTPError
        throw new ErrorClass(error.response?.statusText)
    }

    return (
        <Box layerStyle={'page'}>
            <Page page={page} components={PAGEDESIGNER_TO_COMPONENT} />
        </Box>
    )
}

PageViewer.displayName = 'PageViewer'
PageViewer.propTypes = {
    pageIdProp: PropTypes.string
}

export default PageViewer
