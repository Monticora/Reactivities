import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Fragment, SyntheticEvent, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";


export default observer(function ActivityList(){
    const {activityStore} = useStore();
    const {deleteActivity, activitiesList, loading} = activityStore;
 
    const [target, setTarget] = useState('');

    function handleActvityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string)
    {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return(
        <Fragment>
                <Segment>
                    <Item.Group divided>
                        {activitiesList.map(activity => (
                            <Item key={activity.id}>
                                <Item.Content>
                                    <Item.Header as='a'>{activity.title}</Item.Header>
                                    <Item.Meta>{activity.data}</Item.Meta>
                                    <Item.Description>
                                        <div>{activity.description}</div>
                                        <div>{activity.city}, {activity.venue}</div>
                                    </Item.Description>
                                    <Item.Extra>
                                        <Button /*onClick={() => activityStore.selectActivity(activity.id)}*/ as={Link} to={`/activities/${activity.id}`} floated='right' content='View' color='blue' />
                                        <Button 
                                            name={activity.id} 
                                            loading={loading && target === activity.id} 
                                            onClick={(e) => handleActvityDelete(e, activity.id)} 
                                            floated='right' 
                                            content='Delete' 
                                            color='red' 
                                        />
                                        <Label basic content={activity.category} />
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                        ))}
                    </Item.Group>
                </Segment>
        </Fragment>
    )
})