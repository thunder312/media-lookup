<template>
<div class="toolbar">
  <button class="button" @click="showModal = true">Neu</button>
			<transition name="modal">
				<div class="modal-mask" v-if="showModal">
					<component :is="currentCreateComponent"></component>
				</div>
			</transition>
  </div>
</template>
<script>
import CreateReceiptModal from './CreateReceiptModal.vue';
import CreateFilmModal from './CreateFilmModal.vue';
import CreateBookModal from './CreateBookModal.vue';
export default {
    // eslint-disable-next-line
  name: 'ToolBar',
	components: [{'CreateReceiptModal': CreateReceiptModal}, {'CreateFilmModal': CreateFilmModal}, {'CreateBookModal': CreateBookModal}],
	data:function (){
		return{
			showModal: false,
			currentCreateComponent: ''
		}
	},
	mounted() { 
		this.emitter.on("category", category => {
			this.category = category;
			console.log("using category: " + this.category);
			switch(this.category) {
				case "receipts":
					this.currentCreateComponent = "CreateReceiptModal";
					break;
				case "films":
					this.currentCreateComponent = "CreateFilmModal";
					break;
				case "books":
					this.currentCreateComponent = "CreateBookModal";
					break;
			}
		});
	},
	methods:{
		closeModal(){
			this.showModal = false;
		}	
	},
  props: {
    msg: String
  }
}
</script>