## 开发说明
1. 在项目下执行npm link
2. 进入demo目录中，执行npm link @ali/amap-sura-component
3. 回到项目下执行npm i
4. 项目下执行npm start进行开发（此时要在demo中采用相对路径的方式引入组件）

--------------验证组件是否ok-----------
5. 项目下执行npm build
6. 进入demo中，把组件的引用方式改为npm组件的方式
7. 执行npm start进行预览