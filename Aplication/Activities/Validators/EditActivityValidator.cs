using Aplication.Activities.Commands;
using Aplication.Activities.DTOs;
using FluentValidation;

namespace Aplication.Activities.Validators;

public class EditActivityValidator : BaseActivityValidator<EditActivity.Command, EditActivityDto>
{
    public EditActivityValidator() : base(x => x.ActivityDto)
    {
        RuleFor(x => x.ActivityDto.Id).NotEmpty().WithMessage("Id cannot be empty");
    }
}