import classNames from 'classnames'

export default function Navbar({ children, className = '' }) {
  const navbarClassNames = classNames({
    navbar: true,
    'h-24': true
  })

  return (
    <div className={`${navbarClassNames} ${className}`}>
      {children}
    </div>
  )
}