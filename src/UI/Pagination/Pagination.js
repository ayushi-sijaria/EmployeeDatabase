import { Pagination } from 'react-bootstrap'
import classes from './Pagination.module.css'
const PaginationComponent = (props) =>
{
     return (
          <Pagination className={classes.Pagination}>
               <Pagination.Prev onClick={props.onPrev}/>               
               <Pagination.Next onClick={props.onNext}/>
          </Pagination>
     )
}
export default PaginationComponent