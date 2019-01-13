import * as tsx from 'vue-tsx-support'
import { VNode } from 'vue'
import { Types } from '@/store'

export default tsx.component({
  name: 'Card',
  props: {
    item: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    deleteItem(index: number): void {
      this.$store.commit(Types.DELETE_ITEM, index)
    }
  },
  render(): VNode {
    return (
      <div style={styles.card}>
        <h1 style={styles.item}>{this.item}</h1>
        <button style={styles.close} onClick={() => this.deleteItem(this.index)}>
          ✕
        </button>
      </div>
    )
  }
})

const styles = {
  card: {
    padding: '15px',
    width: '80%',
    margin: '25px auto',
    background: '#fff',
    borderRadius: '10px',
    boxShadow: '0 3px 30px 0 rgba(0, 0, 0, 0.6)'
  },
  item: {
    margin: '0 0 30px 0'
  },
  close: {
    borderRadius: '50%',
    background: '#fff',
    width: '35px',
    height: '35px',
    fontSize: '15px',
    border: '1px solid #000'
  }
}
