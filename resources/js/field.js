import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-wysimark-nova', IndexField)
  app.component('detail-wysimark-nova', DetailField)
  app.component('form-wysimark-nova', FormField)
})
