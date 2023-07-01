import PropTypes from 'prop-types'

import { StyledTabLinks, StyledNavLink } from './styles'

const RouteTabs = ({ tabLinksClassName, sections = [], parentRoute }) => {
    return (
        <div className={tabLinksClassName}>
            <StyledTabLinks>
                {sections.map((section, idx) => {
                    return (
                        <StyledNavLink
                            key={idx}
                            to={`${parentRoute}/${section.route}`}
                            className={({ isActive }) => isActive && 'active'}
                        >
                            {section.title}
                        </StyledNavLink>
                    )
                })}
            </StyledTabLinks>
        </div>
    )
}

export default RouteTabs

RouteTabs.propTypes = {
    tabLinksClassName: PropTypes.string,
    sections: PropTypes.array,
    parentRoute: PropTypes.string,
}
