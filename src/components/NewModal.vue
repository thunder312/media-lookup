<template>
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-body">
				<div class="form-group">
					<label>Title</label>
					<input
						type="text"
						id="title"
						class="form-control"
						v-model="dataObj.title"
					/>
				</div>
			</div>
			<div class="modal-footer">
				<button class="btn btn-success" @click="handleSave">
					Save
				</button>
				<button class="btn btn-secondary" @click="handleClose">
					Close
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "New-Modal",
	data: function (){
		return{
			dataObj:{
				title: '',
				body:''
			}
		}
	},
	methods:{
		handleSave(){
      console.log(this.dataObj);
      this.handleClose();
		},
		handleClose(){
			this.$emit('close');
		}
	}
}
</script>