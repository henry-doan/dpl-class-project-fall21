import { useEffect, useState } from 'react';
import { Grid, Card, Image, Button, Icon, Modal } from 'semantic-ui-react';
import ItemBought from './ItemBought';
import ItemForm from './ItemForm';

const ItemShow = ({ listId, img, name, desc, id, deleteItem }) => {
  const [open, setOpen] = useState(false)

  return (
    <Grid.Column>
      <Card>
        <Image src={img} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>
            {desc}
            <br />
            <ItemBought 
              listId={listId}
              id={id}
              name={name}
              desc={desc}
              img={img}
            />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Grid columns={3}>
            <Grid.Column>
              <a>
                Notes
              </a>
            </Grid.Column>
            <Grid.Column>
              <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={
                  <Button icon color='yellow'>
                    <Icon name='pencil' />
                  </Button>
                }
              >
                <Modal.Header>Edit Item</Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                    <ItemForm 
                      listId={listId}
                      id={id}
                      name={name}
                      desc={desc}
                      img={img}
                      setOpen={setOpen}
                    />
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <Button color='black' onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                </Modal.Actions>
              </Modal>
            </Grid.Column>
            <Grid.Column>
              <Button icon color='red' onClick={() => deleteItem(listId, id)}>
                <Icon name='trash alternate' />
              </Button>
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    </Grid.Column>
  )
}

export default ItemShow;