import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from "react";

export const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        
        {
        id: 1,
        rating: 4,
        text: "Great experience! The service was excellent. The staff was friendly and attentive. I would definitely visit again."
      },
      {
        id: 2,
        rating: 6,
        text: "The food was okay, but the service needs improvement. The waiters were slow and inattentive. Not the best experience."
      },
      {
        id: 3,
        rating: 5.0,
        text: "Absolutely fantastic! The ambiance, the food, and the service were all top-notch. Highly recommended to anyone visiting."
      }

])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const addFeedback = (newFeedBack) => {
        newFeedBack.id = uuidv4()
        setFeedback([newFeedBack, ...feedback])
      }


    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
    
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }

      const editFeedback = (item) => {
        setFeedbackEdit({
            item, 
            edit: true,
        })
      }

      const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem} : item))
      }


    return <FeedbackContext.Provider 
    value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}
    >
        {children}
    </FeedbackContext.Provider>
}

// export default FeedbackContext

 








