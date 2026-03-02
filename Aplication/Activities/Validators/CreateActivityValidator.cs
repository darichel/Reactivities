using Aplication.Activities.Commands;
using Aplication.Activities.DTOs;

namespace Aplication.Activities.Validators;

public class CreateActivityValidator: BaseActivityValidator<CreateActivity.Command, CreateActivityDto>
{
    public CreateActivityValidator() : base(x => x.ActivityDto)
    {
        
    }
}