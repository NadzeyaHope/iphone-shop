export const onAddProduct = async (productData: any, path : string ): Promise<boolean | undefined> => {
    try {
        const response = await fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        });

        if (response.ok) {
            console.log('Данные продукта успешно отправлены');
            // Очистить форму или перенаправить пользователя
            return response.ok
        } else {
            console.error('Не удалось отправить данные продукта');
            return response.ok
        }
    } catch (error) {
    console.error('Ошибка:', error);
}
}

