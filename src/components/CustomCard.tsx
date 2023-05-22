import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {CardProps} from "@mui/material/Card/Card";


type ICustomCardProps = {
    image?:string,
    title?:string,
    children?:string,
} & CardProps

const CustomCard:React.FC<ICustomCardProps> = ({image,title,children,...props})=>{
    return     <Card {...props}>
        {
            image && <CardMedia
                sx={{ height: 140 }}
                image={image}
                title="green iguana"
            />
        }
        <CardContent>
            {
                title && <Typography gutterBottom variant="h6" component="span">
                    {title}
                </Typography>
            }
            <div>
                {children}
            </div>

        </CardContent>
    </Card>
}


export default React.memo(CustomCard)