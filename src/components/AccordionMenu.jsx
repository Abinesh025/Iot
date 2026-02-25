import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

/**
 * AccordionMenu — renders a tree of navigation items with collapsible sections.
 *
 * items shape:
 * [
 *   {
 *     label: 'Section Title',
 *     icon?: <SVG>,
 *     to?: '/path',           // if leaf
 *     children?: [ ... ]      // if branch
 *   }
 * ]
 */
export default function AccordionMenu({ items = [], onNavigate }) {
    return (
        <nav className="space-y-1">
            {items.map((item, idx) => (
                <AccordionItem key={idx} item={item} onNavigate={onNavigate} />
            ))}
        </nav>
    )
}

function AccordionItem({ item, depth = 0, onNavigate }) {
    const { pathname } = useLocation()
    const hasChildren = item.children && item.children.length > 0

    // Auto-expand if any child is active
    const isChildActive = hasChildren && item.children.some(
        child => child.to && pathname.startsWith(child.to) ||
            (child.children && child.children.some(gc => gc.to && pathname.startsWith(gc.to)))
    )
    const [open, setOpen] = useState(isChildActive)

    if (hasChildren) {
        return (
            <div>
                <button
                    onClick={() => setOpen(!open)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isChildActive
                            ? 'text-primary-400 bg-primary-500/5'
                            : 'text-surface-300 hover:text-surface-50 hover:bg-surface-800/40'
                        }`}
                    style={{ paddingLeft: `${12 + depth * 16}px` }}
                >
                    <span className="flex items-center gap-2">
                        {item.icon && <span className="w-4 h-4 opacity-70">{item.icon}</span>}
                        {item.label}
                    </span>
                    <svg
                        className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                <div
                    className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="mt-1 space-y-0.5">
                        {item.children.map((child, idx) => (
                            <AccordionItem key={idx} item={child} depth={depth + 1} onNavigate={onNavigate} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    // Leaf link
    return (
        <NavLink
            to={item.to}
            end
            onClick={() => onNavigate && onNavigate()}
            className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${isActive
                    ? 'bg-primary-500/10 text-primary-400 font-medium'
                    : 'text-surface-400 hover:text-surface-50 hover:bg-surface-800/40'
                }`
            }
            style={{ paddingLeft: `${12 + depth * 16}px` }}
        >
            {item.icon && <span className="w-4 h-4 opacity-70">{item.icon}</span>}
            {item.label}
        </NavLink>
    )
}
