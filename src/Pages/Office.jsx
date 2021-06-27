
import React, { useState, useEffect } from "react";

const Office = () => {
    return (
        <div className="grid grid-cols-6">
            <div className="col-span-3">
                <h1 className="text-red-600 font-bold" style={{ fontSize: "200px" }}>OЙ!</h1>
                <div className="font-sans">
                    ...
                    <div>Страница которую вы ищите удалена или не существовала :(</div>
                    <br/>
                    <div>Код ошибки: 404</div>
                </div>
            </div>

        </div>
    )
}

export default Office;