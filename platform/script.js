document.addEventListener('DOMContentLoaded', function () {
    // 获取所有的 tab_item 和 tab_content
    const tabItems = document.querySelectorAll('.tab_item');
    const tabContents = document.querySelectorAll('.tab_content');

    // 添加点击事件到每个 tab_item
    tabItems.forEach((tabItem, index) => {
        tabItem.addEventListener('click', function () {
            // 清除所有 tab_item 的选中状态
            tabItems.forEach(item => item.classList.remove('this_tab_item'));
            // 取消所有 tab_content 的显示
            tabContents.forEach(content => content.classList.remove('this_tab_content'));

            // 设置当前 tab_item 为选中状态
            tabItem.classList.add('this_tab_item');
            // 显示对应的 tab_content
            tabContents[index].classList.add('this_tab_content');
        });
    });

    // 上一步按钮逻辑
    const prevButtons = document.querySelectorAll('.prev_step');
    prevButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            if (index > 0) {
                // 切换到上一个 tab
                tabItems[index - 1].click();
            }
        });
    });

    // 跳过按钮逻辑
    const skipButtons = document.querySelectorAll('.skip_step');
    skipButtons.forEach((button) => {
        button.addEventListener('click', function () {
            // 自动跳转到下一个 tab
            const currentIndex = [...tabItems].findIndex(item => item.classList.contains('this_tab_item'));
            if (currentIndex < tabItems.length - 1) {
                tabItems[currentIndex + 1].click();
            }
        });
    });

    // 下一步按钮逻辑
    const nextButtons = document.querySelectorAll('.next_step');
    nextButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            if (index < tabItems.length - 1) {
                // 切换到下一个 tab
                tabItems[index + 1].click();
            }
        });
    });

    // 重新开始计算按钮逻辑
    const restartButtons = document.querySelectorAll('.again');
    restartButtons.forEach((button) => {
        button.addEventListener('click', function () {
            // 重置所有输入框
            document.querySelectorAll('input[type="number"]').forEach(input => input.value = '');
            // 返回到第一个 tab
            tabItems[0].click();
        });
    });

    // 导出按钮逻辑
    const exportButtons = document.querySelectorAll('.export_result');
    exportButtons.forEach((button) => {
        button.addEventListener('click', function () {
            // 此处可以实现导出逻辑
            alert("导出结果的功能实现");
        });
    });
     // “新增”按钮逻辑
    const addButtons = document.querySelectorAll('.tab4_add_button');
    addButtons.forEach((button) => {
        button.addEventListener('click', function () {
            // 创建新的包装耗材输入行
            const newRow = document.createElement('div');
            newRow.className = 'tab4_table_item'; // 设置新行的类名

            // 创建新的输入项
            newRow.innerHTML = `
                <div>
                    <input type="text" placeholder="包装耗材类型" class="packing_material_type"/>
                </div>
                <div>
                    <input type="number" placeholder="耗材消耗量（吨）" class="packing_material_consumption"/>
                </div>
                <div>
                    <div class="min_button remove_button">移除</div>
                </div>
            `;

            // 将新行添加到包装耗材的表格中
            const tableBody = document.querySelector('.tab4_table_body');
            tableBody.appendChild(newRow);

            // 添加移除按钮点击事件
            const removeButton = newRow.querySelector('.remove_button');
            removeButton.addEventListener('click', function () {
                tableBody.removeChild(newRow);
            });
        });
    });
});