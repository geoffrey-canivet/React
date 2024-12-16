import style from './formulaire.module.css';
const Formulaire = () => {
    return (
        <>
            <div className={style.containerform}>
                <div className={`card ${style.cardform}`}>
                    <div className="card-header">Ajouter une tâche</div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control form-control-sm" id="nom"
                                       placeholder="Nom de la tâche"/>
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control form-control-sm" id="description" rows="3"
                                          placeholder="Déscription"></textarea>
                            </div>
                            <div className="mb-3">
                                <select className="form-select form-select-sm" id="priorite" name="priorite">
                                    <option>Bas</option>
                                    <option>Normal</option>
                                    <option>Urgent</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary">Ajouter</button>
                            </div>

                        </form>
                    </div>
                    <div className="card-footer"></div>
                </div>
            </div>


        </>
    );
};

export default Formulaire;