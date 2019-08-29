import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

const Header = ({ siteTitle }) => {
    const [expanded, setExpanded] = useState(false)
    const toggle = () => setExpanded(!expanded)
    return (
        <header className='has-background-primary'>
            <nav
                className='navbar is-primary'
                role='navigation'
                aria-label='main navigation'
            >
                <div className='navbar-brand'>
                    <Link className='navbar-item' to='/'>
                        <h1 className='title has-text-white'>LOGOPEDIA</h1>
                    </Link>

                    <div
                        role='button'
                        onClick={toggle}
                        className={`is-inverted navbar-burger burger ${expanded &&
                            'is-active'}`}
                        aria-label='menu'
                        aria-expanded='false'
                        data-target='navbarBasicExample'
                    >
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                    </div>
                </div>

                <div
                    id='navbarBasicExample'
                    className={`navbar-menu ${expanded ? 'is-active' : ''}`}
                >
                    <div className='navbar-start'>
                        <Link className='navbar-item' to='/'>
                            Hem
                        </Link>
                    </div>

                    <div className='navbar-end'>
                        {/* <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-primary">
                  <strong>Sign up</strong>
                </Link>
                <Link className="button is-light">Log in</Link>
              </div>
            </div> */}
                    </div>
                </div>
            </nav>
        </header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
