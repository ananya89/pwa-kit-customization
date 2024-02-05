/*
 * Copyright (c) 2023, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {SimpleGrid} from '@salesforce/retail-react-app/app/components/shared/ui'
import {Region, regionPropType} from '@salesforce/commerce-sdk-react/components'

/**
 * This layout component displays its children in a 2 row x 1 column grid on mobile
 * and a 1 row x 2 column grid on desktop.
 *
 * @param {componentProps} props
 * @param {regionType []} props.regions - The page designer regions for this component.
 * @param {object} props.data - The data for the component.
 * @param {string} props.typeId - A mapping of typeId's to react components representing the type.
 * @returns {React.ReactElement} - Grid component.
 */
export const MobileGridLookBook = ({regions}) => (
    <SimpleGrid className="mobile-grid-look-book" columns={{base: 2, sm: 3}} gridGap={4}>
        {regions.map((region) => (
            <Region key={region.id} region={region} />
        ))}
    </SimpleGrid>
)

MobileGridLookBook.displayName = 'MobileGridLookBook'

MobileGridLookBook.propTypes = {
    // Internally Provided
    regions: PropTypes.arrayOf(regionPropType).isRequired
}

export default MobileGridLookBook
