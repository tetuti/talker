/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'
import Header from './header'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className='container'>{children}</main>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
