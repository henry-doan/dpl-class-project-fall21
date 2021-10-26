import { ItemConsumer } from '../../providers/ItemProvider';
import { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import ItemShow from './ItemShow';

const ItemList = ({ listId, getItems, items, deleteItem }) => {

  useEffect(() => {
    getItems(listId)
  }, [])

  return (
    <>
      <h1>Items</h1>
      <Grid columns={3} divided stackable>
        { items.map(i => 
          <ItemShow {...i} listId={listId} deleteItem={deleteItem} />
        )}
      </Grid>
    </>
  )
}

const ConnectedItemList = (props) => (
  <ItemConsumer>
    { value => <ItemList {...props} {...value} /> }
  </ItemConsumer>
)

export default ConnectedItemList;