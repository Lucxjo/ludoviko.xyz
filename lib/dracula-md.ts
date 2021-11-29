import visit from 'unist-util-visit'
import { visitChildren } from 'unist-util-visit-children'

export function links() {
    return transformer

    function transformer(ast) {
        visit(ast, 'link', visitor)

        function visitor(node) {
            const data = node.data || (node.data = {})
            const props = data.hProperties || (data.hProperties = {})
            const url = node.url
            props.className = 'drac-anchor drac-text drac-text-purple drac-text-pink--hover drac-mb-sm'

            if(url.startsWith('/')) {
                return
            } else {
                props.target = '_blank'
                props.rel = 'noopener noreferrer'
                return
            }
        }
    }
}

export function quote() {
    return transformer

    function transformer(ast) {
        visit(ast, 'blockquote', visitor)

        function visitor(node) {
            const data = node.data || (node.data = {})
            const props = data.hProperties || (data.hProperties = {})
            var giveClasses =  visitChildren(function(node) {
                // @ts-ignore
                node.data.hProperties.className = 'drac-text drac-text-pink drac-line-height drac-italics drac-m-xs'
            })
            props.className = 'drac-text drac-text-pink drac-mb-sm'
            giveClasses(node)
        }
    }
}

export function heading() {
    return transformer

    function transformer(ast) {
        visit(ast, 'heading', visitor)

        function visitor(node) {
            const data = node.data || (node.data = {})
            const props = data.hProperties || (data.hProperties = {})

            if (node.depth == 1) {
                props.className = 'drac-heading drac-heading-2xl drac-text-white'
            } else if (node.depth == 2) {
                props.className = 'drac-heading drac-heading-xl drac-text-white'
            } else if (node.depth == 3) {
                props.className = 'drac-heading drac-heading-lg drac-text-white'
            }else if (node.depth == 4) {
                props.className = 'drac-heading drac-heading-md drac-text-white'
            } else if (node.depth == 5) {
                props.className = 'drac-heading drac-heading-sm drac-text-white'
            } else {
                props.className = 'drac-heading drac-heading-xs drac-text-white'
            }
        }
    }
}

export function paragraph() {
    return transformer

    function transformer(ast) {
        visit(ast, 'paragraph', visitor)

        function visitor(node) {
            const data = node.data || (node.data = {})
            const props = data.hProperties || (data.hProperties = {})
            props.className = 'drac-text drac-line-height drac-text-white'
        }
    }
}

export function strong() {
    return transformer

    function transformer(ast) {
        visit(ast, 'strong', visitor)

        function visitor(node) {
            const data = node.data || (node.data = {})
            const props = data.hProperties || (data.hProperties = {})
            props.className = 'drac-text drac-text-bold drac-line-height drac-text-white'
        }
    }
}

export function code() {
    return transformer

    function transformer(ast) {
        visit(ast, 'code', visitor)

        function visitor(node) {
            const data = node.data || (node.data = {})
            const props = data.hProperties || (data.hProperties = {})
            props.className = 'drac-text drac-text-purple'
        }
    }
}