import PropTypes from 'prop-types'
// material
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// ----------------------------------------------------------------------

MHidden.propTypes = {
    children: PropTypes.node,
    width: PropTypes.oneOf([
        'xsDown',
        'smDown',
        'mdDown',
        'lgDown',
        'xlDown',
        'xsUp',
        'smUp',
        'mdUp',
        'lgUp',
        'xlUp'
    ]).isRequired
}

export default function MHidden({ width, children }) {
    const theme = useTheme()
    const breakpoint = width.substring(0, 2)

    const hiddenUp = useMediaQuery(() => theme.breakpoints.up(breakpoint))
    const hiddenDown = useMediaQuery(() => theme.breakpoints.down(breakpoint))

    if (width.includes('Down')) {
        return hiddenDown ? null : children
    }

    if (width.includes('Up')) {
        return hiddenUp ? null : children
    }

    return null
}