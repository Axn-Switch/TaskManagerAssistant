import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red':'green'} text={showAdd ? 'close' : 'Add'} onClick={onAdd}/>
    </header>
  )
}


Header.defaultProps = {
    title: "Task Manager",
}

Header.propTypes= {
  title: PropTypes.string.isRequired, 
}
//for dynamic styling
//const headingStyles = {
//}
export default Header   