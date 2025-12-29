using System.ComponentModel.DataAnnotations;

namespace Aplication.Activities.DTOs;

public class CreateActivityDto
{
    [Required]
    public string Title { get; set; } = String.Empty;
    
    [Required]
    public string Description { get; set; }  = String.Empty;
    
    [Required]  
    public DateTime Date { get; set; } = DateTime.MinValue;
    
    [Required]
    public string Category { get; set; }  = String.Empty;

    // Location properties
    [Required]
    public string City { get; set; }  = String.Empty;
    
    [Required]
    public string Venue { get; set; }   = String.Empty; 
    
    [Required]
    public double Latitude { get; set; }  = Double.NaN;
    
    [Required]
    public double Longitude { get; set; }  = Double.NaN;
}