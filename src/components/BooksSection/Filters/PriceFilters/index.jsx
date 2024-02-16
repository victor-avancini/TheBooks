const PriceFilters = () => {
    return (
        <div>
            <h3>Filtrar por preço</h3>
            <div>
                <label htmlFor="min">Mínimo R$</label>
                <input type="number" name="min" id="min"/>
            </div>
            <div>
                <label htmlFor="max">Máximo R$</label>
                <input type="number" name="max" id="max"/>
            </div>
        </div>
    )
}

export default PriceFilters