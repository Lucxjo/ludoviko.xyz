import { Anchor, Button, Box, Select } from '@dracula/dracula-ui'
import { FiChevronDown } from 'react-icons/fi'
import React, { useState } from 'react'
import Link from 'next/link'
import en from '../lang/en'
import { useRouter } from 'next/dist/client/router'

export default function Navigation() {
  const t = en

    const [isNavCollapsed, setIsNavCollapsed] = useState(true)
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)

    return <Box color="blackSecondary" mx="sm" rounded="lg" mb="lg" px="sm">
    <nav className="navbar fixed-top navbar-expand-lg drac-box drac-bg-black-secondary drac-mx-sm drac-rounded-lg drac-mb-lg drac-px-sm">
        <div className="container-fluid">
            <Link href="/" passHref><Anchor className="navbar-brand" color="pinkPurple" hoverColor="purpleCyan">Ludoviko</Anchor></Link>
            <Button variant="outline" color="purple" className="custom-toggler navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded={!isNavCollapsed ? true : false}
                aria-label="Toggle navigation"
                onClick={handleNavCollapse}>
                    <FiChevronDown className="drac-text-pink drac-text-purple--hover" />
            </Button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                <div className="navbar-nav me-auto" id="nav-items">
                    <Link href="/#about" passHref><Anchor className="nav-item nav-link" color="purple" hoverColor="pink">{t.about}</Anchor></Link>
                    <Link href="/#projects" passHref><Anchor className="nav-item nav-link" color="purple" hoverColor="pink">{t.projects}</Anchor></Link>
                    <Link  href="/#social" passHref><Anchor className="nav-item nav-link" color="purple" hoverColor="pink">{t.social}</Anchor></Link>
                    <Link href="/blog" passHref><Anchor className="nav-item nav-link" color="purple" hoverColor="pink">{t.blog}</Anchor></Link>
                    <Link href="/discord" passHref><Anchor className="nav-item nav-link" color="purple" hoverColor="pink">Discord</Anchor></Link>
                </div>
            </div>
        </div>
    </nav>
    </Box>
}