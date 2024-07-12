import React, { useEffect, useState } from "react";
import { UpdatedAPIRecipe } from "../../../API/APIData";
import CustomButton from "../../atoms/Button/CustomButton";
import AddRecipeCategories from "../../atoms/RecipeAdd/AddRecipeCategories/AddRecipeCategories";
import AddRecipeField from "../../atoms/RecipeAdd/AddRecipeField/AddRecipeField";
import AddRecipeImage from "../../atoms/RecipeAdd/AddRecipeImage/AddRecipeImage";
import AddRecipeIngredients from "../../atoms/RecipeAdd/AddRecipeIngredients/AddRecipeIngredients";
import { getLocalOptions } from "../../utils/localStorage";
import "./styles.scss";
const AddRecipeContainer = () => {
    const [title, setTitle] = useState("");
    const [instructions, setInstructions] = useState("");
    const [mainIngredients, setMainIngredients] = useState<string[]>(Array(6).fill(""));
    const [image, setImage] = useState<File | null>(null);
    const [categories, setCategories] = useState<string[]>([]);
    const [options, setOptions] = useState<string[][]>([[], [], []]);

    const [submit, setSubmit] = useState<UpdatedAPIRecipe>({
        cuisineId: "",
        cuisineName: "",
        dietId: "",
        dietName: "",
        difficultyId: "",
        difficultyName: "",
        id: "",
        image: "",
        ingredients: [],
        instructions: "",
        name: "",
    });

    useEffect(() => {
        setOptions(getLocalOptions());
    }, []);

    //const handleTitleChange = (value: string) => setTitle(value);
    const handleTitleChange = (value: string) => {
        setSubmit((prevSubmit) => ({
            ...prevSubmit,
            name: value,
        }));
    };

    const handleInstructionChange = (value: string) => {
        setSubmit((prevSubmit) => ({
            ...prevSubmit,
            instructions: value,
        }));
    };

    const handleMainIngredientsChange = (index: number, value: string) => {
        const newIngredients = [...mainIngredients];
        newIngredients[index] = value;
        setMainIngredients(newIngredients);

        setSubmit((prevSubmit) => ({
            ...prevSubmit,
            ingredients: mainIngredients,
        }));
    };

    const handleImageChange = (file: File) => setImage(file);

    const handleCategoriesChange = (selectedCategories: string[]) => {
        setCategories(selectedCategories);
    };

    const handleDietChange = (selectedCategories: string[]) => {
        setCategories(selectedCategories);
    };

    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log(submit);
    };

    return (
        <div className="add-recipe-container container">
            <form className="recipe-form">
                <div className="recipe-detail">
                    <h3>Recipe Details</h3>
                    <AddRecipeField
                        title="Recipe Title"
                        placeholder="Recipe Name"
                        value={submit.name}
                        onChange={handleTitleChange}
                    />
                    <AddRecipeField
                        title="Instructions"
                        placeholder="Add instruction separated with ."
                        value={submit.instructions}
                        onChange={handleInstructionChange}
                    />
                    <AddRecipeIngredients
                        title="Main ingredients"
                        placeholder={""}
                        mainIngredients={mainIngredients}
                        onChange={handleMainIngredientsChange}
                    />
                </div>

                <div className="recipe-detail my-5">
                    <h3>Image</h3>
                    <AddRecipeImage onChange={handleImageChange} />
                </div>

                <div className="recipe-detail my-5">
                    <h3>Categories & Attributes</h3>
                    <AddRecipeCategories
                        options={options[0]}
                        onChange={handleCategoriesChange}
                        selectedCategories={categories}
                    />
                    <AddRecipeCategories
                        options={options[1]}
                        onChange={handleDietChange}
                        selectedCategories={categories}
                    />
                </div>

                <div className="submit-button mb-5">
                    <CustomButton text="Publish" handle={formSubmit} disabled={false} />
                </div>
            </form>
        </div>
    );
};

export default AddRecipeContainer;
