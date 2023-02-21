import classes from './cards.module.scss'
import SimpleCard from './card/simpleCard'

const Cards = (props: any) => {
    return(
      <div className={classes.block}>
        {props.pers.length !== 0 ? 
        props.pers.slice(0, 10).map((item: any) => {
          return (
          <SimpleCard key={item.id} item={item} />
          )
        }) : ''}
      </div>
    )
}

export default Cards;