import * as tsx from 'vue-tsx-support'
import { VNode } from 'vue'
import Card from '@/components/Card'
import { Types } from '@/store'

interface IData {
  text: string
  item: string
  isError: boolean
}

export default tsx.component({
  name: 'ShoppingList',
  data(): IData {
    return {
      text: 'A shopping list',
      item: '',
      isError: false
    }
  },
  computed: {
    shoppingList(): string[] {
      return this.$store.state.list
    }
  },
  methods: {
    addItem(): void {
      if (this.item) {
        this.isError = false
        this.$store.commit(Types.ADD_ITEM, this.item)
        this.item = ''
      } else {
        this.isError = true
      }
    }
  },
  render(): VNode {
    return (
      <div>
        <h1>{this.text}</h1>
        <input v-model={this.item} />
        <button onClick={this.addItem}>Add</button>
        {this.isError ? <p style={{ color: 'red' }}>Oops... Input a text.</p> : <p />}
        {this.shoppingList.map((item, index) => (
          <Card item={item} index={index} />
        ))}
      </div>
    )
  }
})
