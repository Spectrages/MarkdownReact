import { CardHeader, Avatar, Chip } from "@mui/material"
import classes from './simpleCard.module.scss'
import { red } from "@mui/material/colors"
import { Link } from "react-router-dom"

const SimpleCard = (props: any) => {
    return(
        <Link to={`/person/${props.item.id}`} key={props.item.name}>
          <div className={classes.card}>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={props.item.image} />}
              title={props.item.name}
              subheader={props.item.gender}
            />
            {props.item.status === 'Alive' ?
              <Chip color="success" label='Alive' /> :
              <Chip color="warning" label='Dead' />}
          </div>
        </Link>
    )
}

export default SimpleCard;